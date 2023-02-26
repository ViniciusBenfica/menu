// import { renderHook } from '@testing-library/react';
import { getStaticProps } from "@/pages/index";

describe('index', () => {
  it("check item return data", async () => {
    const items: any = await getStaticProps({} as any);
    expect(items).toEqual(expect.objectContaining({
      props: {
        itens: expect.any(Array)
      }
    }));
    
    if (items.props.itens.length > 0) {
      expect(items.props.itens).toContainEqual({
        id: expect.any(Number),
        name: expect.any(String),
        description: expect.any(String),
        price: expect.any(Number),
        image: expect.any(String),
        views: expect.any(Number),
        restaurantId: expect.any(Number),
        categoryId: expect.any(Number),
        category: expect.any(Object),
        Restaurant: expect.any(Object)
      });
    }
    else {
      expect(items.props.itens).toHaveLength(0);
    }
  });
})