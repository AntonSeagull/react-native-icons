

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowBottomLeft = (props: IconProps) => {

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
          <Path d="M18.2426 7.17154L16.8284 5.75732L7.75739 14.8283L7.75739 10.2427H5.75739L5.75739 18.2427H13.7574V16.2427L9.17144 16.2427L18.2426 7.17154Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

