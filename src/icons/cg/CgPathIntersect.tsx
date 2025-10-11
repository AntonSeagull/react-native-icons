

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPathIntersect = (props: IconProps) => {

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
          <Path d="M15 5H5V15H9V19H19V9H15V5ZM13 7H7V13H9V9H13V7ZM17 17H11V15H15V11H17V17Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

