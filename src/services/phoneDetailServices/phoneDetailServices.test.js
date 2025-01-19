import { describe, expect, it, afterEach } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchPhoneDetail } from "./phoneDetailServices";
import { basicMockedDetailUrl, mockPhoneDetail } from "../../mocks/phones/urls";

const mockAxios = new MockAdapter(axios);

describe("phoneServices", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should fetch phone details with id", async () => {
    mockAxios.onGet(basicMockedDetailUrl).reply(200, { data: mockPhoneDetail });

    const response = await fetchPhoneDetail("123");

    expect(response).toEqual({ data: mockPhoneDetail });
  });

  it("should handle error response gracefully", async () => {
    mockAxios
      .onGet(basicMockedDetailUrl)
      .reply(500, { message: "Internal Server Error" });

    try {
      await fetchPhoneDetail("123");
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.response).toBeDefined();
      expect(error.response.status).toBe(500);
      expect(error.response.data.message).toBe("Internal Server Error");
    }
  });
});
