import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useProfessional = () =>{
    const {user, loading} = useAuth();
    const axiosPublic = useAxiosPublic()
    const {data: isProfessional, isPending: isProfessionalLoading} = useQuery({
        queryKey: [user.email, 'isProfessional'],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/professional/${user.email}`);
            console.log(res.data);
            return res.data?.professional
        }
    })
    return [isProfessional, isProfessionalLoading];
}

export default useProfessional