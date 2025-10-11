

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrUser = (props: IconProps) => {

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
          <Path  fill="none" d="M8,24 L8,19 M16,24 L16,19 M3,24 L3,19 C3,14.0294373 7.02943725,11 12,11 C16.9705627,11 21,14.0294373 21,19 L21,24 M12,11 C14.7614237,11 17,8.76142375 17,6 C17,3.23857625 14.7614237,1 12,1 C9.23857625,1 7,3.23857625 7,6 C7,8.76142375 9.23857625,11 12,11 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

