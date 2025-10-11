

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrangeBack = (props: IconProps) => {

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
          <Path d="M3 3H11V7H17V13H21V21H13V17H7V11H3V3ZM15 13H13V15H9V11H11V9H15V13Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

