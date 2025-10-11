

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgInsights = (props: IconProps) => {

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
          <Path d="M15 8H19V20H5V10H9V4H15V8ZM13 6H11V18H13V6ZM15 10V18H17V10H15ZM9 12V18H7V12H9Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

