import React, { useState } from "react";
import { Flex, Box, FormControl, FormLabel, Input, Button, Text, Divider, IconButton, useToast } from "@chakra-ui/react";
import { FaGoogle, FaApple, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleLoginWithEmail = () => {
    if (!email) {
      toast({
        title: "Error.",
        description: "Please enter your email address to login.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    // Implement email login logic here
    console.log("Login with Email:", email);
  };

  const handleLoginWithGoogle = () => {
    // Implement Google login logic here
    console.log("Login with Google");
  };

  const handleLoginWithApple = () => {
    // Implement Apple login logic here
    console.log("Login with Apple");
  };

  return (
    <Flex width="full" align="center" justifyContent="center" p={5}>
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Text fontSize="2xl">Login to your account</Text>
        </Box>
        <Box my={4} textAlign="left">
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email address" onChange={(event) => setEmail(event.currentTarget.value)} />
          </FormControl>
          <Button width="full" mt={4} leftIcon={<FaEnvelope />} onClick={handleLoginWithEmail}>
            Login with Email
          </Button>
          <Divider my={6} />

          <Box textAlign="center">
            <Text mb={2}>Or continue with</Text>
            <IconButton aria-label="Login with Google" icon={<FaGoogle />} onClick={handleLoginWithGoogle} m={1} />
            <IconButton aria-label="Login with Apple" icon={<FaApple />} onClick={handleLoginWithApple} m={1} />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;
