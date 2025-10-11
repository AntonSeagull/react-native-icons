

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPlayListAdd = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M2 5H14V7H2V5Z" fill="currentColor" />
          <Path  d="M2 9H14V11H2V9Z" fill="currentColor" />
          <Path  d="M10 13H2V15H10V13Z" fill="currentColor" />
          <Path  d="M16 9H18V13H22V15H18V19H16V15H12V13H16V9Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

