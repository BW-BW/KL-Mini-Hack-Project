import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { Card, CardBody, Stack, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import ProfileCard from './profilecard';

function LandingPage() {
    return (
        <div className="bg-[#F3EFE0]">
            <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                padding={5}
            >
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
            </SimpleGrid>
        </div>
    );
}

export default LandingPage;
