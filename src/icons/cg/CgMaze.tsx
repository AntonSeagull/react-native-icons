

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgMaze = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M11.3709 9.59273L8.77816 7L1 14.7782L3.59272 17.3709L11.3709 9.59273Z" fill="currentColor" />
          <Path d="M15.2218 7L23 14.7782L20.424 17.3542L15.2218 12.152L10.0197 17.3542L7.44367 14.7782L15.2218 7Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

