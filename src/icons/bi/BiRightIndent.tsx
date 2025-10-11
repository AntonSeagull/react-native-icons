

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiRightIndent = (props: IconProps) => {

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
          <Path d="M10 15h10v2H10zm-6 4h16v2H4zm6-8h10v2H10zm0-4h10v2H10zM4 3h16v2H4zm0 5v8l4-4z" />
        </G>
      </Svg>
    );
  }

