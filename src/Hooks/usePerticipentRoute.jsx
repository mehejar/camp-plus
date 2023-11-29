import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const usePerticipentRoute = () =>{
    const {user, loading} = useAuth();
    const axiosPublic = useAxiosPublic()
    const {data: isPerticipent, isPending: isPerticipentLoading} = useQuery({
        queryKey: [user.email, 'isPerticipent'],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/Perticipent/${user.email}`);
            console.log(res.data);
            return res.data?.perticipent
        }
    })
    return [isPerticipent, isPerticipentLoading];
}

export default usePerticipentRoute