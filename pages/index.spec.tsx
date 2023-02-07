// import { renderHook } from '@testing-library/react';
import { render } from "@testing-library/react"
import axios from "axios"
import { api } from "../service/api"
import { Teste } from './index';
import MockAdapter from 'axios-mock-adapter';
import IProductDTO from "../interfaces/IProductDTO";

var axiosMock = new MockAdapter(axios);

describe('index', () => {
  it("check item return data", async () => {

    var dataMock: IProductDTO = {
      id: 0,
      name: 'string',
      price: 0,
      description: 'string',
    };

    axiosMock.onGet().reply(200, dataMock);
    const items = await Teste();
    expect(items).toEqual(expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
      price: expect.any(Number),
      description: expect.any(String),
    }));
  });
})