

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiContract = (props: IconProps) => {

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
          <Path d="M96 64L64 96l48 48-48 48h128V64l-48 48-48-48zm224 0v128h128l-48-48 48-48-32-32-48 48-48-48zM64 320l48 48-48 48 32 32 48-48 48 48V320H64zm256 0v128l48-48 48 48 32-32-48-48 48-48H320z" fill="#000" />
        </G>
      </Svg>
    );
  }

