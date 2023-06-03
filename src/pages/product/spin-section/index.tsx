import React from "react";
import { SpinContainer, StatusPanel } from "./style";
import Spin from "../../../components/spin";
import Flex from "../../../components/flex";
import Button from "../../../components/button";

const SpinSection = () => {
    return (
        <SpinContainer>
            <Spin />
            <Flex $fDirection="column" $gap="2rem">
                <Flex $hAlign="center" $gap="0.5rem">
                    <Button bg="#3D9D43">Deal For $967,546.67 </Button>
                </Flex>
                <StatusPanel></StatusPanel>
            </Flex>
        </SpinContainer>
    )
}

export default SpinSection;
