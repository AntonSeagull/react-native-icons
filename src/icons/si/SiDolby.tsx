

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiDolby = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M0 3.564v16.872h2.488c4.648 0 8.438-3.788 8.438-8.436s-3.79-8.436-8.438-8.436H0zm21.512 0c-4.648 0-8.438 3.788-8.438 8.436s3.79 8.436 8.438 8.436H24V3.564h-2.488z" />
        </G>
      </Svg>
    );
  }

