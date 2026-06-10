import axiosInstance  from "../../src/services/axiosinstance";

class CharacterService {
    async listarPersonagens() {
        const response = await axiosInstance.get("character");
        return response;
    }
}

export default new CharacterService();