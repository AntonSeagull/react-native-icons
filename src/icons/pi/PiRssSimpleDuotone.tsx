

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiRssSimpleDuotone = (props: IconProps) => {

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
          <Path  d="M216,192H64V40A152,152,0,0,1,216,192Z" opacity="0.2" />
          <Path  d="M224,192a8,8,0,0,1-16,0c0-79.4-64.6-144-144-144a8,8,0,0,1,0-16C152.22,32,224,103.78,224,192ZM64,104a8,8,0,0,0,0,16,72.08,72.08,0,0,1,72,72,8,8,0,0,0,16,0A88.1,88.1,0,0,0,64,104Zm4,72a12,12,0,1,0,12,12A12,12,0,0,0,68,176Z" />
        </G>
      </Svg>
    );
  }

