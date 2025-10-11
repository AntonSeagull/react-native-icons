

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbInnerShadowLeftFilled = (props: IconProps) => {

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
          <Path d="M4.929 4.929c3.905 -3.905 10.237 -3.905 14.142 0c3.905 3.905 3.905 10.237 0 14.142c-3.905 3.905 -10.237 3.905 -14.142 0c-3.905 -3.905 -3.905 -10.237 0 -14.142zm3.535 2.121a1 1 0 0 0 -1.414 0a7 7 0 0 0 0 9.9a1 1 0 1 0 1.414 -1.414a5 5 0 0 1 0 -7.072a1 1 0 0 0 0 -1.414z" />
        </G>
      </Svg>
    );
  }

