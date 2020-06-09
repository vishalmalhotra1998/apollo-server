class User {
  constructor() {
    this.user = new Set();
  }

  create = (data) => {
    const { user } = this;
    const object = {
      id: user.size + 1,
      ...data,
    };
    user.add(object);
    return object;
  };

  update = (data) => {
    const { id, update } = data;
    const { user } = this;
    const updatedUser = Object.assign(
      [...user].find((user) => user.id === Number(id)),
      update
    );
    return updatedUser;
  };

  list = () => {
    const { user } = this;
    return [...user];
  };

  delete = (data) => {
    const { id } = data;
    const { user } = this;
    user.delete([...user].find((user) => user.id === Number(id)));
    return id;
  };
  getPerticularData = (data) => {
    const { id } = data;
    const { user } = this;
    const searchedData = [...user].find((user) => user.id === Number(id));
    return searchedData;
  };
}

const instance = new User();
Object.freeze(instance);

export default instance;
