"use client";
import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CREATE_CHATBOT } from "@/graphql/mutations/mutation";
import { useMutation } from "@apollo/client";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

function CreateChatbot() {
  const {user}  = useUser();  
  const [name, setName] = useState('');
  const [createChatbot,{data,loading,error}] = useMutation(CREATE_CHATBOT, {
    variables: {
      clerk_user_id: user?.id,
     name,
    }
  });
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10 bg-white p-10 rounded-md m-10">
      <Avatar seed="create-chatbot" />
      <div>
        <h1 className="text-xl lg:text-3xl font-semibold">Create</h1>
        <h2 className="font-light">
          Create a new chatbot to assist you in your conversation with your customers
        </h2>
        <form className="flex flex-col md:flex-row gap-2 mt-5">
          <Input
            placeholder="Chatbot Name.."
            type="text"
            className="max-w-lg"
          />
          <Button className="bg-blue-950" type="submit">Create Chatbot</Button>
        </form>

        <p className="text-gray-300 mt-5">Example: Customer Support Chatbot</p>
      </div>
    </div>
  );
}

export default CreateChatbot;
