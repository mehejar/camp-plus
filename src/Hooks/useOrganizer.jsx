import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useOrganizer = () =>{
    const {user, loading} = useAuth();
    const axiosPublic = useAxiosPublic()
    const {data: isOrganizer, isPending: isOrganizerLoading} = useQuery({
        queryKey: [user.email, 'isOrganizer'],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/organizer/${user.email}`);
            console.log(res.data);
            return res.data?.organizer
        }
    })
    return [isOrganizer, isOrganizerLoading];
}

export default useOrganizer