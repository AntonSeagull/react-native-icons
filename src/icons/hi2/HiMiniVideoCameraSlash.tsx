

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const HiMiniVideoCameraSlash = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 20 20"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 10, 10)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M1 13.75V7.182L9.818 16H3.25A2.25 2.25 0 0 1 1 13.75ZM13 6.25v6.568L4.182 4h6.568A2.25 2.25 0 0 1 13 6.25ZM19 4.75a.75.75 0 0 0-1.28-.53l-3 3a.75.75 0 0 0-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 0 0 1.28-.53V4.75ZM2.28 4.22a.75.75 0 0 0-1.06 1.06l10.5 10.5a.75.75 0 1 0 1.06-1.06L2.28 4.22Z" />
        </G>
      </Svg>
    );
  }

