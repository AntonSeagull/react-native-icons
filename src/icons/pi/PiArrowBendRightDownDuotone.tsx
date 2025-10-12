

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowBendRightDownDuotone = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M200,176l-48,48-48-48Z" opacity="0.2" />
          <Path  d="M207.39,172.94A8,8,0,0,0,200,168H160V128A104.11,104.11,0,0,0,56,24a8,8,0,0,0,0,16,88.1,88.1,0,0,1,88,88v40H104a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,207.39,172.94ZM152,212.69,123.31,184h57.38Z" />
        </G>
      </Svg>
    );
  }

