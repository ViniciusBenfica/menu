import { getStaticProps } from "@/pages/index";

describe('index', () => {
  it("check item return data", async () => {
    const items = await getStaticProps({});

    expect(items).toEqual(expect.objectContaining({
      props: {
        itens: expect.any(Array)
      }
    }));
    
    if ('props' in items && items.props.itens.length > 0) {
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
    } else if('props' in items) {
      expect(items.props.itens).toHaveLength(0);
    } else {
      // find a way to fail tests
    }
  });
})