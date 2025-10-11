

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbZodiacSagittarius = (props: IconProps) => {

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
          <Path d="M4 20l16 -16" />
          <Path d="M13 4h7v7" />
          <Path d="M6.5 12.5l5 5" />
        </G>
      </Svg>
    );
  }

