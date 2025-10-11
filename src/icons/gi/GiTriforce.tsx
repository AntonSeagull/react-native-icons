

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiTriforce = (props: IconProps) => {

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
          <Path d="M256 59.72L142.687 256h226.625L256 59.72zM369.313 256L256 452.28h226.625L369.312 256zM256 452.28L142.687 256 29.376 452.28H256z" fill="#000" />
        </G>
      </Svg>
    );
  }

