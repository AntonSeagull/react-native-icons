

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLogoMicrosoft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M31.87,30.58H244.7V243.39H31.87Z" />
          <Path  d="M266.89,30.58H479.7V243.39H266.89Z" />
          <Path  d="M31.87,265.61H244.7v212.8H31.87Z" />
          <Path  d="M266.89,265.61H479.7v212.8H266.89Z" />
        </G>
      </Svg>
    );
  }

