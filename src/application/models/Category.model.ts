export type Category = {
  id: string;
  name: string;
  items: CategoryItems[];
};

export type CategoryItems = { id: string; name: string };
