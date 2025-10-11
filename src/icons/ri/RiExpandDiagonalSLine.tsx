

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiExpandDiagonalSLine = (props: IconProps) => {

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
          <Path d="M15.5858 7H12V5H19V12H17V8.41421L8.41421 17H12V19H5V12H7V15.5858L15.5858 7Z" />
        </G>
      </Svg>
    );
  }

