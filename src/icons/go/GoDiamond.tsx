

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoDiamond = (props: IconProps) => {

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
          <Path d="M1.527 13.237a1.75 1.75 0 0 1 0-2.474l9.272-9.273a1.75 1.75 0 0 1 2.475 0l9.272 9.273a1.75 1.75 0 0 1 0 2.474l-9.272 9.272a1.75 1.75 0 0 1-2.475 0Zm1.06-1.414a.25.25 0 0 0 0 .354l9.273 9.272a.25.25 0 0 0 .353 0l9.272-9.272a.25.25 0 0 0 0-.354l-9.272-9.272a.25.25 0 0 0-.353 0Z" />
        </G>
      </Svg>
    );
  }

