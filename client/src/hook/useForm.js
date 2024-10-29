import { useEffect, useState } from "react";

const useTaskForm = (initialState, task) => {
   const [formData, setFormData] = useState(initialState);

   useEffect(() => {
      if (task) {
         setFormData({
            title: task.title,
            description: task.description,
            setDate: task.setDate.slice(0, 10),
            startTime: task.startTime,
            endTime: task.endTime,
            priority: task.priority,
         });
      } else {
         setFormData(initialState);
      }
   }, [task]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   return [formData, handleChange];
};

export default useTaskForm;
