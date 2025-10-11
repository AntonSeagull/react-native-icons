

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextAUnderlineFill = (props: IconProps) => {

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
          <Path  d="M148.73,120H107.27L128,75.09ZM216,32V224a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V32a8,8,0,0,1,8-8H208A8,8,0,0,1,216,32ZM76.65,167.26a8,8,0,0,0,10.61-3.91L99.89,136h56.22l12.63,27.35a8,8,0,0,0,14.52-6.7l-48-104a8,8,0,0,0-14.52,0l-48,104A8,8,0,0,0,76.65,167.26ZM200,192a8,8,0,0,0-8-8H64a8,8,0,0,0,0,16H192A8,8,0,0,0,200,192Z" />
        </G>
      </Svg>
    );
  }

