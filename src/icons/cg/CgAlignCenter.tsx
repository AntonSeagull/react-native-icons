

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgAlignCenter = (props: IconProps) => {

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
          <Path d="M9 13H15V17H9V13Z" fill="currentColor" />
          <Path d="M6 7H18V11H6V7Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

