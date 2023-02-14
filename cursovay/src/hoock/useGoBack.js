import { useNavigate } from "react-router-dom";

const useGoback = () => {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

  return { goBack }
}

export default useGoback;