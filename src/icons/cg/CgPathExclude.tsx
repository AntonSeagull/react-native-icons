

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPathExclude = (props: IconProps) => {

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
          <Path d="M5 5H15V9H9V15H5V5ZM9 15V19H19V9H15V15H9Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

