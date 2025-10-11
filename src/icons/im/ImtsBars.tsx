

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImtsBars = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0 13h16v2h-16zM2 9h2v3h-2zM5 5h2v7h-2zM8 8h2v4h-2zM11 2h2v10h-2z" fill="#000000" />
        </G>
      </Svg>
    );
  }

