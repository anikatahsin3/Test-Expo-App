import React from 'react';
import { View } from 'react-native';

interface SpacerProps {
  height: number;
}

const Spacer: React.FC<SpacerProps> = ({ height }) => <View style={{ height }} />;

export default Spacer;
