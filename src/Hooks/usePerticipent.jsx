import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"
import useCamps from "./useCamps"

const usePerticipent = () =>{

    const axiosPublic = useAxiosPublic()
    const camps = useCamps()
    const { data: perticipent = [] } = useQuery({
        queryKey: ['perticipent', _id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/campRegisters?campsId=${_id}`)
            return res.data
        },

    })
    
        return [perticipent,  refetch]
    }




export default usePerticipent