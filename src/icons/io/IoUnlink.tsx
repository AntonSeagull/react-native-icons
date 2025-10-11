

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoUnlink = (props: IconProps) => {

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
          <Path  d="M200.66,352H144a96,96,0,0,1,0-192h55.41" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" />
          <Path  d="M312.59,160H368a96,96,0,0,1,0,192H311.34" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" />
        </G>
      </Svg>
    );
  }

