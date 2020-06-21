package greenboxcollective.helpmycar.backend.controller;

import greenboxcollective.helpmycar.backend.logic.RequestBuilder;
import greenboxcollective.helpmycar.backend.logic.FileLoader;
import greenboxcollective.helpmycar.backend.model.requests.RequestBody;
import greenboxcollective.helpmycar.backend.model.response.ApiResponse;
import java.util.List;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

public class ApiController {

  private static final String SUBSCRIPTION_ID = ""; // insert your subscription id here
  private static final String API_KEY = ""; // insert your api key here
  private static ApiController instance;

  private ApiController() {}

  /**
   * Singleton implementation.
   *
   * @return the same ApiController instance
   */
  public static ApiController getInstance() {
    if (ApiController.instance == null) {
      ApiController.instance = new ApiController();
    }
    return ApiController.instance;
  }

  /**
   * Send post request to the API.
   *
   * @param vins list of vins for the request
   * @return the JSON response of the API as an ApiResponse Object
   */
  public ApiResponse doPost(final List<String> vins) {

    final RequestBody requestBody = RequestBuilder.getInstance().generateRequest(vins);
    final String uri = ""; // insert api url here
    final RestTemplate restTemplate = new RestTemplate();

    final HttpHeaders headers = new HttpHeaders();
    headers.set("X-Subscription-Id", SUBSCRIPTION_ID);
    headers.set("X-API-Key", API_KEY);
    final HttpEntity<RequestBody> request = new HttpEntity<>(requestBody, headers);
    try {
      ResponseEntity<ApiResponse> response =
          restTemplate.postForEntity(uri, request, ApiResponse.class);
      if (response.getBody() != null && !response.getBody().hasVehicleLevelError()) {
        return response.getBody();
      } else {
        System.out.println("Error found, responding with mock data.");
        return new FileLoader().readMockApiResponse();
      }
    } catch (RestClientException e) {
      e.printStackTrace();
      System.out.println("Error found, responding with mock data.");
      return new FileLoader().readMockApiResponse();
    }
  }
}
