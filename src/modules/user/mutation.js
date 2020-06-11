
const resolver ={

  loginUser: async (parent, args, context)=>{
    const { payload: {email, password}}= args;
    const { dataSources }= context;
    const response= await dataSources.userApi.loginUser({email, password});
    return response.data;
  }
};

export default resolver;
