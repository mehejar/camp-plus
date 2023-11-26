import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"
import useCamps from "./useCamps"

const usePerticipent = () =>{

    const axiosPublic = useAxiosPublic()
    const camps = useCamps()
        const { refetch, data: perticipent = [] } = useQuery({
            queryKey: ['perticipent', camps?._id],
            queryFn: async () => {
                const res = await axiosPublic.get(`/campRegisters?campsId=${camps._id}`)
                return res.data
            },
    
        })
    
        return [perticipent,  refetch]
    }




export default usePerticipent