

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoUnlinkOutline = (props: IconProps) => {

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
          <Path  d="M208,352H144a96,96,0,0,1,0-192h64" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="36" />
          <Path  d="M304,160h64a96,96,0,0,1,0,192H304" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="36" />
        </G>
      </Svg>
    );
  }

