

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGenderThird = (props: IconProps) => {

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
          <Path d="M11 12a5 5 0 1 0 10 0a5 5 0 0 0 -10 0z" />
          <Path d="M11 12h-3" />
          <Path d="M8 12l-5 -4v8z" />
        </G>
      </Svg>
    );
  }

