import { motion } from "framer-motion";
import styled from "styled-components";

export const List = styled(motion.ul)`
  margin: 16px auto;
  max-width: 1100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-grow: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px auto;
  max-width: 1100px;
`;