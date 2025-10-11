

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoChevronCollapseOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M136 104L256 208L376 104" fill="none" />
          <Path d="M136 408L256 304L376 408" fill="none" />
        </G>
      </Svg>
    );
  }

