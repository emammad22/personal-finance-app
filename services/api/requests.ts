import { instance } from ".";

const postData = async (path: string, arg?: any) => (await instance.post(path, arg)).data;
const getData = async (path: string) => (await instance.get(path)).data;
const deleteData = async (path: string) => (await instance.delete(path)).data;
const patchData = async (path: string, arg?: any) => (await instance.patch(path, arg)).data;

export { postData, getData, deleteData, patchData };
