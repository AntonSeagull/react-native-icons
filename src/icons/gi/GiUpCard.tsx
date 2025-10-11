

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiUpCard = (props: IconProps) => {

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
          <Path d="M256 47L139.4 202.467l93.6-40.115V359h46V162.352l93.6 40.115L256 47zM144 256L32 480h448L368 256h-71v121h-82V256h-71z" fill="#000" />
        </G>
      </Svg>
    );
  }

