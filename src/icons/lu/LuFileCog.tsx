

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuFileCog = (props: IconProps) => {

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
          <Path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <Path d="m2.305 15.53.923-.382" />
          <Path d="m3.228 12.852-.924-.383" />
          <Path d="M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5" />
          <Path d="m4.852 11.228-.383-.923" />
          <Path d="m4.852 16.772-.383.924" />
          <Path d="m7.148 11.228.383-.923" />
          <Path d="m7.53 17.696-.382-.924" />
          <Path d="m8.772 12.852.923-.383" />
          <Path d="m8.772 15.148.923.383" />
        </G>
      </Svg>
    );
  }

