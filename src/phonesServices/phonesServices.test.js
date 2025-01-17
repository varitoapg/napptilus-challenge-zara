import { describe, expect, it, afterEach } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchPhones } from "./phonesServices";
import {
  basicMockedUrl,
  searchMockedUrl,
  limitOffsetMockedUrl,
} from "../mocks/phones/urls";

const mockAxios = new MockAdapter(axios);

describe("phoneServices", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should fetch phones with query parameters", async () => {
    mockAxios.onGet(basicMockedUrl).reply(200, { data: "phones" });

    const response = await fetchPhones();

    expect(response).toEqual({ data: "phones" });
  });

  it("should fetch phones with search query", async () => {
    const search = "iphone";
    mockAxios.onGet(searchMockedUrl).reply(200, { data: "phones with search" });

    const response = await fetchPhones(search);
    expect(response).toEqual({ data: "phones with search" });
  });

  it("should fetch phones with custom limit and offset", async () => {
    const limit = "10";
    const offset = "20";

    mockAxios
      .onGet(limitOffsetMockedUrl)
      .reply(200, { data: "phones with limit and offset" });

    const response = await fetchPhones("", limit, offset);
    expect(response).toEqual({ data: "phones with limit and offset" });
  });

  it("should handle error response gracefully", async () => {
    mockAxios
      .onGet(basicMockedUrl)
      .reply(500, { message: "Internal Server Error" });

    try {
      await fetchPhones();
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.response).toBeDefined();
      expect(error.response.status).toBe(500);
      expect(error.response.data.message).toBe("Internal Server Error");
    }
  });
});
